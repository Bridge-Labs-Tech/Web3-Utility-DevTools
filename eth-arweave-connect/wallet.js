const addressInput = document.getElementById("walletAddress");

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
      console.log("accounts", accounts);
      // set the address input value to the first account
      addressInput.value = accounts[0];
    } catch (error) {
      console.error("Error Getting Ethereum Address", error);
    }
  } else {
    // metamask is not installed
    console.log("Metamask is not installed");
    alert("Metamask is not installed");
  }
}

// arweaveConnect function
// docs: https://docs.th8ta.org/arconnect/functions
async function arweaveConnect() {
  // check if metamask is installed
  if (typeof window.arweaveWallet !== "undefined") {
    // arConnect is installed
    try {
      arweaveWallet.connect(["ACCESS_ADDRESS"], {
        name: "App Name",
        logo: "https://via.placeholder.com/512",
      });
      const accounts = await arweaveWallet.getAllAddresses();
      console.log("accounts", accounts);
      // set the address input value to the first account
      addressInput.value = accounts[0];
    } catch (error) {
      console.error("Error Getting ArweaveWallet Address", error);
    }
  } else {
    // arConnect is not installed
    console.log("ArweaveWallet not Present");
    alert("ArweaveWallet not Present");
  }
}
