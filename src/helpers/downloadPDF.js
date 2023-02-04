export const downloadPDF = () => {
  fetch('Eduardo-Sepúlveda-Curriculum.pdf')
  .then((response) => {
    response.blob()
    .then(blob => {
      const fileURL = window.URL.createObjectURL(blob)
      let alink = document.createElement('a')
      alink.href = fileURL
      alink.download = 'Eduardo-Sepúlveda-Curriculum.pdf'
      alink.click()
    })
  })
}