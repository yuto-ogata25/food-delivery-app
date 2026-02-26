import React from 'react';

interface CarouselContainerProps {
  children: React.ReactNode[];
}

export default function CarouselContainer({
    children,
}: CarouselContainerProps) {
  return <div>{children}</div>
}
