function calculateArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number' || width <= 0 || height <= 0) {
      console.log('Please enter valid positive numbers for width and height.');
      return;
    }
    return width * height;
  }

  