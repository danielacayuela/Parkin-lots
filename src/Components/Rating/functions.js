import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export function getStar(value) {
  switch (value) {
    case 0:
      return <BsStar />;
    case 50:
      return <BsStarHalf />;
    case 100:
      return <BsStarFill />;
  }
}

export function getStars(value) {
  switch (parseFloat(value)) {
    case 0.0:
    case 0.1:
    case 0.2:
      return [0, 0, 0, 0, 0];
    case 0.3:
    case 0.4:
    case 0.5:
    case 0.6:
    case 0.7:
      return [50, 0, 0, 0, 0];
    case 0.8:
    case 0.9:
    case 1:
    case 1.1:
    case 1.2:
      return [100, 0, 0, 0, 0];
    case 1.3:
    case 1.4:
    case 1.5:
    case 1.6:
    case 1.7:
      return [100, 50, 0, 0, 0];
    case 1.8:
    case 1.9:
    case 2.0:
    case 2.1:
    case 2.2:
      return [100, 100, 0, 0, 0];
    case 2.3:
    case 2.4:
    case 2.5:
    case 2.6:
    case 2.7:
      return [100, 100, 50, 0, 0];
    case 2.8:
    case 2.9:
    case 3:
    case 3.1:
    case 3.2:
      return [100, 100, 100, 0, 0];
    case 3.3:
    case 3.4:
    case 3.5:
    case 3.6:
    case 3.7:
      return [100, 100, 100, 50, 0];
    case 3.8:
    case 3.9:
    case 4:
    case 4.1:
    case 4.2:
      return [100, 100, 100, 100, 0];
    case 4.3:
    case 4.4:
    case 4.5:
    case 4.6:
    case 4.7:
      return [100, 100, 100, 100, 50];
    case 4.8:
    case 4.9:
    case 5:
      return [100, 100, 100, 100, 100];
  }
}
