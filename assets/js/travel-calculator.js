// travel-calculator.js
const travelCalculator = {
    // Tipologie di percorso con modificatori di difficoltà
    pathTypes: {
        tortuoso: { modifier: 1.5, description: "Sentiero con molte curve e ostacoli" },
        fangoso: { modifier: 2.0, description: "Terreno bagnato e difficile da percorrere" },
        sterrato: { modifier: 1.2, description: "Strada non asfaltata ma percorribile" },
        pianeggiante: { modifier: 0.9, description: "Terreno facile e senza ostacoli" }
    },

    // Tipi di viaggio con velocità base (km/h)
    travelModes: {
        lento: { speed: 3, description: "Passo lento con carico" },
        camminata: { speed: 5, description: "Camminata normale" },
        corsaLenta: { speed: 8, description: "Corsa a ritmo medio" },
        corsaVeloce: { speed: 12, description: "Corsa sostenuta" },
        cavallo: { speed: 15, description: "A cavallo al trotto" },
        cavallo2: { speed: 25, description: "A cavallo in corsa" },
        carro: { speed: 10, description: "Carro trainato da animali" }
    },

    // Calcola il tempo di percorrenza
    calculateTravelTime: function(distance, pathType, travelMode) {
        // Validazione input
        if (distance <= 0 || !this.pathTypes[pathType] || !this.travelModes[travelMode]) {
            return null;
        }

        // Velocità base modificata dalla difficoltà del percorso
        const effectiveSpeed = this.travelModes[travelMode].speed / this.pathTypes[pathType].modifier;
        
        // Tempo in ore (distanza / velocità)
        const hours = distance / effectiveSpeed;
        
        return {
            hours: hours,
            hoursRounded: Math.round(hours * 10) / 10,
            minutes: Math.round(hours * 60),
            effectiveSpeed: Math.round(effectiveSpeed * 10) / 10
        };
    },

    // Formatta il risultato per la visualizzazione
    formatResult: function(result) {
        if (!result) return "Input non validi";
        
        const days = Math.floor(result.hours / 8); // Considera 8 ore di viaggio al giorno
        const remainingHours = Math.floor(result.hours % 8);
        const minutes = Math.floor((result.hours % 1) * 60);
        
        let formatted = `Tempo stimato: `;
        if (days > 0) formatted += `${days} giorni, `;
        if (remainingHours > 0 || days > 0) formatted += `${remainingHours} ore e `;
        formatted += `${minutes} minuti`;
        
        formatted += ` (a ~${result.effectiveSpeed} km/h)`;
        
        return formatted;
    }
};

// Esporta per uso in altri file (se usi moduli)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = travelCalculator;
}