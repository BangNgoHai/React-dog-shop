import React from 'react'
import DogsCard from './DogsCard';
import './dogs.css'

const DogsPage = (props) => {
    const {allDogs} = props;
    return (
        <section className="dogs-container">
            {allDogs.map((dog)=>{
                return(
                    <div key={dog.id}>
                        <DogsCard
                        id={dog.id}
                        name={dog.name} 
                        breed={dog.breed} 
                        description={dog.description} 
                        price={dog.price} 
                        imageUrl={dog.imageUrl}
                        />
                    </div>             
                );
            })}
        </section>
    )
}

export default DogsPage
