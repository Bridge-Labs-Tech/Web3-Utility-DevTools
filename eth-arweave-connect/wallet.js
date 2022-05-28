const addressInput = document.getElementById("walletAddress");
const errorField = document.getElementById("error");

// metamaskConnect function
// docs: https://docs.metamask.io/guide/getting-started.html#basic-considerations
async function metamaskConnect() {
  // check if metamask is installed
  if (typeof window.ethereum !== "undefined") {
    // metamask is installed
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      errorField.innerHTML = "";
      console.log("accounts", accounts);
      // set the address input value to the first account
      addressInput.value = accounts[0];
    } catch (error) {
      errorField.innerHTML = JSON.stringify(error);
      console.error("Error Getting Ethereum Address", error);
    }
  } else {
    // metamask is not installed
    console.log("Metamask is not installed");
    alert("Metamask is not installed");
    window.open("https://metamask.io/download.html", (target = "_blank"));
  }
}

// arweaveConnect function
// docs: https://docs.th8ta.org/arconnect/functions
async function arweaveConnect() {
  // check if metamask is installed
  if (typeof window.arweaveWallet !== "undefined") {
    // arConnect is installed
    try {
      await arweaveWallet.connect(["ACCESS_ADDRESS"], {
        name: "App Name",
        logo: "https://via.placeholder.com/512",
      });
      const accounts = await arweaveWallet.getActiveAddress();
      errorField.innerHTML = "";
      console.log("accounts", accounts);
      // set the address input value to the first account
      addressInput.value = accounts;
    } catch (error) {
      errorField.innerHTML = JSON.stringify(error);
      console.error("Error Getting ArweaveWallet Address", error);
    }
  } else {
    // arConnect is not installed
    console.log("ArweaveWallet not Present");
    alert("ArweaveWallet not Present");
    // open new tab to download arConnect
    window.open(
      "https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap",
      (target = "_blank")
    );
  }
}
