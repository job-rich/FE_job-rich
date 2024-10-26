import {
  DocIcon,
  DocIcon2,
  EtcIcon,
  EtcIcon2,
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

type FileIconComponentType =
  | typeof DocIcon
  | typeof DocIcon2
  | typeof EtcIcon
  | typeof EtcIcon2
  | typeof ImageIcon
  | typeof ImageIcon2
  | typeof PdfIcon
  | typeof PdfIcon2
  | typeof PptIcon
  | typeof PptIcon2
  | typeof TxtIcon
  | typeof TxtIcon2
  | typeof XlsIcon
  | typeof XlsIcon2
  | typeof ZipIcon
  | typeof ZipIcon2;

interface FileIconMapType {
  [key: string]: {
    default: FileIconComponentType;
    card: FileIconComponentType;
  };
}

export type { FileIconMapType };
