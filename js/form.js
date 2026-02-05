/* ==========================================
   Zruby Oščadnica - Form Validation
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  initFormValidation();
  initDatePickers();
});

/* ==========================================
   Form Validation
   ========================================== */
function initFormValidation() {
  const form = document.getElementById('reservation-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateForm(form)) {
      submitForm(form);
    }
  });

  // Real-time validation on blur
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateField(input);
    });

    // Clear error on input
    input.addEventListener('input', () => {
      const formGroup = input.closest('.form-group');
      if (formGroup.classList.contains('error')) {
        formGroup.classList.remove('error');
      }
    });
  });
}

/* ==========================================
   Validate Entire Form
   ========================================== */
function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

  inputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });

  // Additional cross-field validation
  if (!validateDates(form)) {
    isValid = false;
  }

  return isValid;
}

/* ==========================================
   Validate Individual Field
   ========================================== */
function validateField(field) {
  const formGroup = field.closest('.form-group');
  const errorMessage = formGroup.querySelector('.error-message');
  let error = '';

  // Check if required field is empty
  if (field.hasAttribute('required') && !field.value.trim()) {
    error = 'Toto pole je povinné.';
  }
  // Email validation
  else if (field.type === 'email' && field.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
      error = 'Zadajte platnú emailovú adresu.';
    }
  }
  // Phone validation (Slovak format)
  else if (field.type === 'tel' && field.value) {
    const phoneRegex = /^(\+421|00421|0)?[0-9]{9}$/;
    const cleanPhone = field.value.replace(/\s/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      error = 'Zadajte platné telefónne číslo (napr. +421 XXX XXX XXX).';
    }
  }
  // Number validation
  else if (field.type === 'number' && field.value) {
    const num = parseInt(field.value);
    if (num < 1) {
      error = 'Zadajte číslo väčšie ako 0.';
    }
    if (field.name === 'persons') {
      const selectedAccommodation = document.getElementById('accommodation')?.value;
      if (selectedAccommodation === 'chata1' && num > 6) {
        error = 'Chata 1 má kapacitu max. 6 osôb.';
      } else if (selectedAccommodation === 'chata2' && num > 4) {
        error = 'Chata 2 má kapacitu max. 4 osoby.';
      } else if (selectedAccommodation === 'spolocenska' && num > 30) {
        error = 'Spoločenská miestnosť má kapacitu max. 30 osôb.';
      }
    }
  }
  // Date validation
  else if (field.type === 'date' && field.value) {
    const selectedDate = new Date(field.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      error = 'Dátum nemôže byť v minulosti.';
    }
  }

  // Display or clear error
  if (error) {
    formGroup.classList.add('error');
    if (errorMessage) {
      errorMessage.textContent = error;
    }
    return false;
  } else {
    formGroup.classList.remove('error');
    if (errorMessage) {
      errorMessage.textContent = '';
    }
    return true;
  }
}

/* ==========================================
   Validate Date Range
   ========================================== */
function validateDates(form) {
  const checkinInput = form.querySelector('[name="checkin"]');
  const checkoutInput = form.querySelector('[name="checkout"]');

  if (!checkinInput || !checkoutInput) return true;
  if (!checkinInput.value || !checkoutInput.value) return true;

  const checkin = new Date(checkinInput.value);
  const checkout = new Date(checkoutInput.value);

  const checkinGroup = checkinInput.closest('.form-group');
  const checkoutGroup = checkoutInput.closest('.form-group');
  const checkoutError = checkoutGroup.querySelector('.error-message');

  if (checkout <= checkin) {
    checkoutGroup.classList.add('error');
    if (checkoutError) {
      checkoutError.textContent = 'Dátum odchodu musí byť po dátume príchodu.';
    }
    return false;
  } else {
    checkoutGroup.classList.remove('error');
    if (checkoutError) {
      checkoutError.textContent = '';
    }
    return true;
  }
}

/* ==========================================
   Initialize Date Pickers
   ========================================== */
function initDatePickers() {
  const today = new Date().toISOString().split('T')[0];
  const dateInputs = document.querySelectorAll('input[type="date"]');

  dateInputs.forEach(input => {
    // Set minimum date to today
    input.setAttribute('min', today);

    // Update min date for checkout when checkin changes
    if (input.name === 'checkin') {
      input.addEventListener('change', () => {
        const checkoutInput = document.querySelector('[name="checkout"]');
        if (checkoutInput && input.value) {
          const nextDay = new Date(input.value);
          nextDay.setDate(nextDay.getDate() + 1);
          checkoutInput.setAttribute('min', nextDay.toISOString().split('T')[0]);
          
          // Clear checkout if it's before new minimum
          if (checkoutInput.value && new Date(checkoutInput.value) <= new Date(input.value)) {
            checkoutInput.value = '';
          }
        }
      });
    }
  });
}

/* ==========================================
   Submit Form
   ========================================== */
function submitForm(form) {
  const submitButton = form.querySelector('button[type="submit"]');
  const successMessage = document.querySelector('.success-message');
  
  // Disable button and show loading
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = 'Odosielam...';
  }

  // Collect form data
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Here you would normally send the data to a server
  // For now, we'll simulate a successful submission
  
  /*
   * INTEGRÁCIA S EMAIL SLUŽBOU:
   * 
   * Možnosť 1 - Formspree:
   * 1. Zaregistrujte sa na https://formspree.io/
   * 2. Vytvorte nový formulár a získajte endpoint URL
   * 3. Odkomentujte a upravte nasledujúci kód:
   * 
   * fetch('https://formspree.io/f/YOUR_FORM_ID', {
   *   method: 'POST',
   *   body: formData,
   *   headers: {
   *     'Accept': 'application/json'
   *   }
   * })
   * .then(response => response.json())
   * .then(data => {
   *   showSuccess();
   *   form.reset();
   * })
   * .catch(error => {
   *   showError('Niečo sa pokazilo. Skúste to prosím znova.');
   * })
   * .finally(() => {
   *   if (submitButton) {
   *     submitButton.disabled = false;
   *     submitButton.textContent = 'Odoslať rezerváciu';
   *   }
   * });
   * 
   * Možnosť 2 - EmailJS:
   * 1. Zaregistrujte sa na https://www.emailjs.com/
   * 2. Nastavte email službu a šablónu
   * 3. Odkomentujte a upravte nasledujúci kód:
   * 
   * emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
   *   .then(() => {
   *     showSuccess();
   *     form.reset();
   *   })
   *   .catch((error) => {
   *     showError('Niečo sa pokazilo. Skúste to prosím znova.');
   *   })
   *   .finally(() => {
   *     if (submitButton) {
   *       submitButton.disabled = false;
   *       submitButton.textContent = 'Odoslať rezerváciu';
   *     }
   *   });
   */

  // Simulate API call
  setTimeout(() => {
    showSuccess();
    form.reset();
    
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = 'Odoslať rezerváciu';
    }
  }, 1500);
}

/* ==========================================
   Show Success Message
   ========================================== */
function showSuccess() {
  const successMessage = document.querySelector('.success-message');
  if (successMessage) {
    successMessage.classList.add('show');
    successMessage.textContent = 'Vaša rezervácia bola úspešne odoslaná! Čoskoro vás budeme kontaktovať.';
    
    // Scroll to message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Hide after 5 seconds
    setTimeout(() => {
      successMessage.classList.remove('show');
    }, 5000);
  }
}

/* ==========================================
   Show Error Message
   ========================================== */
function showError(message) {
  const successMessage = document.querySelector('.success-message');
  if (successMessage) {
    successMessage.style.background = '#dc3545';
    successMessage.classList.add('show');
    successMessage.textContent = message;
    
    // Scroll to message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Hide after 5 seconds
    setTimeout(() => {
      successMessage.classList.remove('show');
      successMessage.style.background = '';
    }, 5000);
  }
}
