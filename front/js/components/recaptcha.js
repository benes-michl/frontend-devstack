/* global grecaptcha */

import 'parsleyjs';

$('[id^="form-button-"]').each(function () {
  var $form = $(this).closest('form');
  var $captchaId = $(this).attr('id');
  var captchaRednered = false;

  $form.parsley().on('form:validate', function (formInstance) {
    if (!captchaRednered && formInstance.isValid()) {
      formInstance.validationResult = false;

      var widget = grecaptcha.render($captchaId, {
        'sitekey': RECAPTCHA_SITE_KEY, // eslint-disable-line
        'size': 'invisible',
        'callback': function () {
          formInstance.validationResult = true;
          $form.submit();
        }
      });

      grecaptcha.reset(widget);
      grecaptcha.execute(widget);

      captchaRednered = true;
    }
  });
});
