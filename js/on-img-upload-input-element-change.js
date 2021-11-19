const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const imgUploadInputElement = document.querySelector('.img-upload__input');
const imgUploadPreviewImgElement = document.querySelector('.img-upload__preview img');

const onImgUploadInputElementChange = () => {
  const file = imgUploadInputElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    imgUploadPreviewImgElement.src = URL.createObjectURL(file);
  } else {
    alert('Загрузите файл в формате gif, jpg, jpeg или png');
  }
}

imgUploadInputElement.addEventListener('change', onImgUploadInputElementChange);
