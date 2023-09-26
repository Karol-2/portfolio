const redirectToUrl = (url: string): void => {
    const link: string = url;
    window.open(link, "_blank");
  };

  export default redirectToUrl