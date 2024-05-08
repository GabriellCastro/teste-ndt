import { CircleNotch } from "@phosphor-icons/react";

type Props = {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
};

export function Loading({
  small = false,
  medium = false,
  large = false,
}: Props) {
  return (
    <div className="flex h-full w-full flex-row items-center justify-center">
      <CircleNotch
        size={small ? 24 : medium ? 36 : large ? 48 : 24}
        weight="bold"
        color="#19D561"
        className="animate-spin"
      />
    </div>
  );
}
