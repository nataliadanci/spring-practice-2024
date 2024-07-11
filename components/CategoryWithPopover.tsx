import { Category } from "@/components/Category";
import * as Popover from "@radix-ui/react-popover";
import { CanvaArrow } from "./CanvaArrow";
import React, { ReactNode } from "react";
import { useRef, useState } from "react";

type CategoryWithPopoverProps = {
  categoryName: string;
  children?: ReactNode;
};

export const CategoryWithPopover = ({
  categoryName,
  children,
}: CategoryWithPopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  const triggerWidth = triggerRef.current ? triggerRef.current.offsetWidth : 0;
  const isSale = categoryName === "SALE";

  return (
    <>
      {categoryName === "Top 100" ? (
        <a href="#">
          <Category isSale={isSale}>{categoryName}</Category>
        </a>
      ) : (
        <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
          <Popover.Trigger asChild>
            <div ref={triggerRef}>
              <Category onClick={() => setIsOpen(!isOpen)} isSale={isSale}>
                {categoryName}
              </Category>
            </div>
          </Popover.Trigger>
          {isOpen && (
            <>
              <div className="relative z-10">
                <div
                  className="absolute top-8 right-6"
                  style={{ left: `calc(50% - ${triggerWidth / 2}px - 14px)` }}
                >
                  <CanvaArrow />
                </div>
              </div>
              <Popover.Content className="relative top-4 w-screen z-50 h-96 p-4 bg-white text-black shadow-inner outline-none">
                {children}
              </Popover.Content>
            </>
          )}
        </Popover.Root>
      )}
    </>
  );
};
