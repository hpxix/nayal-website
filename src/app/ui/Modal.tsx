import { FunctionComponent } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  cross: any;
  children: any;
}

const Modal: FunctionComponent<Props> = ({
  open,
  onClose,
  children,
  cross,
}: Props) => {
  if (!open) {
    return null;
  }

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const TOP_Z_INDEX = 1000000;
  return (
    <div>
      <div
        className="fixed w-screen h-screen top-0 right-0 bg-black-op-30 flex items-center justify-center animate__animated animate__fadeIn animate__faster overflow-y-auto"
        style={{
          WebkitBackdropFilter: "blur(10px)",
          backdropFilter: "blur(10px)",
          zIndex: TOP_Z_INDEX - 3,
        }}
        onClick={onClose}
      >
        <div
          className="rounded-lg relative p-11 max-h-full overflow-y-auto animate__animated animate__zoomIn animate__faster mt-36 "
          onClick={stopPropagation}
        >
          <div
            className="absolute top-7 right-6 cursor-pointer"
            onClick={onClose}
          >
            <div>{cross}</div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
