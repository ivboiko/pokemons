export const getImage = (imageUrl) => {
  const image = imageUrl.slice(12);

  switch (image) {
    case 'Bulbasaur.png':
      return require('../../assets/images/Bulbasaur.png');
    case 'Pikachu.png':
      return require('../../assets/images/Pikachu.png');
    case 'Venusaur.png':
      return require('../../assets/images/Venusaur.png');
    case 'Vulpix.png':
      return require('../../assets/images/Vulpix.png');
    default:
      return require('../../assets/images/no-image.png');
  }
};
