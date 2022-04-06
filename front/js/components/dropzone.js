import Dropzone from 'dropzone';

window.Dropzone = Dropzone;
window.Dropzone.autoDiscover = false;

// Dropzone
if ($('#file').length) {
  var fileList = new Array();

  var home_url = "";

  $('#file').dropzone({
    addRemoveLinks: true,
    maxFilesize: 10, //max velikost souboru 10 MB
    createImageThumbnails: false,
    acceptedFiles: 'image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/rtf,application/x-rtf,text/richtext,text/plain,application/vnd.oasis.opendocument.text',
    dictRemoveFile: 'x',
    dictCancelUpload: 'x',
    dictFallbackMessage: 'Ve vašem prohlížeči nelze nahrávat soubory přetažením.',
    dictFileTooBig: 'Soubor je příliš velký ({{filesize}}MB). Maximální povolená velikost je {{maxFilesize}}MB',
    dictInvalidFileType: 'Není dovoleno nahrávat soubory tohoto typu.',
    dictResponseError: 'Server vrátil odpověď {{statusCode}}.',
    dictCancelUploadConfirmation: 'Opravdu chcete přerušit nahrávání tohoto souboru?',
    dictMaxFilesExceeded: 'Máte nahraný maximální počet souborů.',
    url: home_url + '/ajax/upload/', // eslint-disable-line

    init: function () {
      this.on('success', function (file, response) {
        fileList[file.upload.uuid] = { 'fid': response.file_id };
      });
    },

    processing: function () {
      $('.btn').attr('disabled', 'disabled'); //disabluje tlačítko, dokud nejsou nahrané přílohy
    },
    queuecomplete: function () {
      $('.btn').removeAttr('disabled'); // aktivuje tlačítko na odeslání formuláře
    },
    removedfile: function (file) {
      if (fileList[file.upload.uuid] && fileList[file.upload.uuid].fid > 0) {
        $.get($('.dropzone').data('remove-upload-url') + fileList[file.upload.uuid].fid).done(function () {
          file.previewElement.remove();
        });
      } else {
        file.previewElement.remove();
      }

      if ($('.dz-preview.dz-file-preview').children().length == 0) {
        $('.dz-preview.dz-file-preview').remove();
      }
    }
  });
}
