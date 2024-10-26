import {
  DocIcon,
  DocIcon2,
  ImageIcon,
  ImageIcon2,
  PdfIcon,
  PdfIcon2,
  PptIcon,
  PptIcon2,
  TxtIcon,
  TxtIcon2,
  XlsIcon,
  XlsIcon2,
  ZipIcon,
  ZipIcon2,
} from "@/constants/icon";
import { FileIconMapType } from "@/types/file";

const FileIconMap: FileIconMapType = {
  xls: { default: XlsIcon, card: XlsIcon2 },
  xlsx: { default: XlsIcon, card: XlsIcon2 },
  ppt: { default: PptIcon, card: PptIcon2 },
  pptx: { default: PptIcon, card: PptIcon2 },
  doc: { default: DocIcon, card: DocIcon2 },
  docx: { default: DocIcon, card: DocIcon2 },
  pdf: { default: PdfIcon, card: PdfIcon2 },
  txt: { default: TxtIcon, card: TxtIcon2 },
  jpg: { default: ImageIcon, card: ImageIcon2 },
  jpeg: { default: ImageIcon, card: ImageIcon2 },
  png: { default: ImageIcon, card: ImageIcon2 },
  gif: { default: ImageIcon, card: ImageIcon2 },
  zip: { default: ZipIcon, card: ZipIcon2 },
};

export { FileIconMap };
