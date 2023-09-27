const redirectToUrl = (url: string | undefined): void => {
    if( typeof url === "string")
     window.open(url, "_blank");
  };

  export default redirectToUrl