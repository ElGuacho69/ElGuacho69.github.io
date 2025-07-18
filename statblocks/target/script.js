(() => {
  // typescript/logic/AnimalService.ts
  function test() {
    console.log("I have been called");
  }

  // typescript/presentation/LoadController.ts
  document.addEventListener("DOMContentLoaded", () => {
    test();
  });
})();
