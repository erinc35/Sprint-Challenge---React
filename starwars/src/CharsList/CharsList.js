import React from 'react';
import './CharsList.css';

const CharsList = props => {
    return (
        <div class='container d-sm-flex flex-sm-column'>
            {props.chars.map(char => {
                return (

                    <div class="row justify-content-sm-center mt-sm-5">
                            <div class="col-sm-5">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Name: {char.name}</h5>
                                        <p class="card-text">Birth Year: {char.birth_year}</p>
                                        <p class="card-text">Gender: {char.gender}</p>
                                        <p class="card-text">Eye Color: {char.eye_color}</p>
                                    <p class="card-text">Hair Color:{char.hair_color}</p>
                                    <p class="card-text">Height: {char.height}</p>
                                    <p class="card-text">Skin Color: {char.skin_color}</p>
                                            
                                        
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>
                            
                        </div>


                )
            })}
            {/* {console.log(props.chars)} */}
        </div>
    )
}

export default CharsList;