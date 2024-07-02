const data = {
  datasets: [
    {
      data: [7, 5], // Esempio: 7 risposte corrette e 5 risposte sbagliate
      backgroundColor: [
        "#D20094", // Rosso per risposte sbagliate
        "#00FFFF", // Blu per risposte corrette
      ],
      hoverOffset: 2, //  suddiviso il grafico se 2 o piu colori
      borderWidth: 0, // Imposta il bordo a 0 per il dataset cosi non viene visualizzato il suo poredefinito
    },
  ],
};
const config = {
  type: "doughnut", // tipo di grafico , la ciambella
  data: data, // dati da utilizzare per il grafico
  options: {
    // Plugin per gestire il colore di sfondo del canvas del grafico
    plugins: {
      customCanvasBackgroundColor: {
        // È utile per applicare modifiche personalizzate al canvas prima del rendering del grafico.
        // "chart" È l'istanza del grafico Chart.js su cui viene applicato il plugin. Fornisce accesso a tutte le proprietà e i metodi necessari per manipolare il grafico.
        //"options": È un oggetto che contiene le opzioni configurabili del plugin. Nel tuo caso, options.color specifica il colore di sfondo del canvas.

        beforeDraw: (chart, options) => {
          const { ctx } = chart;
          ctx.save(); // Salva lo stato corrente del contesto di rendering
          ctx.fillStyle = options.color || "transparent"; // Colore di sfondo trasparente , cosi da poter visualizzare l immagine di sfondo.
          ctx.restore(); // Ripristina lo stato precedente del contesto di rendering
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 0, // Rimuove il bordo degli archi del grafico
      },
    },
    cutoutPercentage: 70, // teoricamente dovrebbe ridimensioanre la grandezza dello spessore del cerchio ma nn va
  },
};

let myChart = new Chart(document.getElementById("responsesDiagram"), config);
