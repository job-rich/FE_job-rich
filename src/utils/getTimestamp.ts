const getCurrentFormattedTime = (): string => {
  const now = new Date();
  return now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export { getCurrentFormattedTime };
