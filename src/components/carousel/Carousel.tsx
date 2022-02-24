import React, { useEffect, useState } from "react";
import './Carousel.scss';

export interface CarouselProps {
    children:
    | React.ReactChild
    | React.ReactChild[];
};

enum Direction {
    Left = 1,
    Right = -1,
}

export default function Carousel(props: CarouselProps) {
    // const [items, setItems] = useState(props.children)
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer + 1);
          }, 1000); 
        // increment every 3 seconds
        if (timer % 4 === 0) {
            handleShift(-1)();
        }
        return () => clearInterval(interval);
      }, [timer]);

    function handleShift(direction: Direction) {
        return () => {
            const carouselElements : HTMLElement[] = Array.from(document.querySelectorAll('.carousel__item'));
            const numItems = React.Children.count(props.children);

            carouselElements.forEach(element => {
                if (element.dataset.pos) {
                    const elementPosition = parseInt(element.dataset.pos);
                    let newPosition = (elementPosition + direction) % numItems;
                    if (newPosition < 0) {
                        newPosition = carouselElements.length - 1;
                    }
                    element.dataset.pos = newPosition.toString();
                }
            })

            setTimer(1);
        }
    }

    function handleClickBackground(event: React.MouseEvent) {
        const carousel : HTMLElement | null = document.querySelector('.carousel');
        if (carousel) {
            const leftOffset = carousel.getBoundingClientRect().left
            const width = carousel.offsetWidth;
            const middle = width / 2;

            if (event.clientX - leftOffset >= middle) {
                handleShift(Direction.Right)();
            } else {
                handleShift(Direction.Left)();
            }
        }
        
    }
    
    return(
        <div className="carousel">
            <div className="arrowed" onClick={handleShift(Direction.Left)}>
                <div className="arrow left"></div>
            </div>
            
            <ul className="carousel__list" 
                onClick={e => {handleClickBackground(e)}} 
                // onMouseOver={e => handleMouseOver(e)}
            >   
                {React.Children.map(props.children, (item, index) => {    
                    let numItems = React.Children.count(props.children);
                    return <li className="carousel__item" data-pos={(index % numItems).toString()}> {item} </li>
                })}
            </ul>
            
            <div className="arrowed" onClick={handleShift(Direction.Right)}>
                <div className="arrow right"></div>
            </div>
        </div>
    )
  }
