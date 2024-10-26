const getExtension = (fileName: string) =>
  fileName.split(".").pop()?.toLowerCase() ?? "etc";

export { getExtension };
