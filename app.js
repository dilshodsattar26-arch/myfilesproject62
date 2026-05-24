const coreModelInstance = {
    version: "1.0.62",
    registry: [637, 962, 1994, 1182, 1659, 232, 850, 10],
    init: function() {
        const nodes = this.registry.filter(x => x > 118);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreModelInstance.init();
});