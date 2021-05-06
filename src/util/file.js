export const getFileMetaData = (file) => ({
  fileLength: 'mm:ss',
  fileName: !file ? '' : file.name,
  fileSize: !file
    ? '0 MB'
    : String((file.size / (1024 * 1024)).toFixed(2)) + 'MB',
  fileExtension: !file ? '' : file.name.split('.').pop()
})
