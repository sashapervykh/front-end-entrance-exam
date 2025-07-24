import html2pdf from 'html2pdf.js';

export function downloadPDF() {
  const content = document.querySelector('main');
  const options = {
    margin: 1,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
  };

  html2pdf().set(options).from(content).save();
}
