export const getParticleColor = (region?: {
  pm10Value: number;
  pm25Value: number;
}) => {
  const particleValue = region?.pm10Value;
  if (particleValue) {
    if (particleValue <= 30) {
      return "#3A7AF2";
    }
    if (30 < particleValue && particleValue <= 80) {
      return "#4EF5C3";
    }
    if (80 < particleValue && particleValue <= 150) {
      return "#F6A626";
    }
    return "#FA0D05";
  }
};
