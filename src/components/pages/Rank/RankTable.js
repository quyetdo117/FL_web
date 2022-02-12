import React from 'react';
import './RankTable.css'

function RankTable() {
    const pointsRank = [
        {
            id: 1,
            nameTeam: 'FAP',
            numOfMatch: 14,
            numOfWins: 23,
            numOfLoses: 12,
            factor: 5,
            score: 20
        },
        {
            id: 2,
            nameTeam: 'HEV',
            numOfMatch: 14,
            numOfWins: 23,
            numOfLoses: 12,
            factor: -2,
            score: 18
        },
        {
            id: 3,
            nameTeam: 'SGP',
            numOfMatch: 14,
            numOfWins: 23,
            numOfLoses: 12,
            factor: 32,
            score: 39
        },
        {
            id: 4,
            nameTeam: 'B2F',
            numOfMatch: 14,
            numOfWins: 23,
            numOfLoses: 12,
            factor: 0,
            score: 18
        },
        {
            id: 5,
            nameTeam: 'FL',
            numOfMatch: 14,
            numOfWins: 23,
            numOfLoses: 12,
            factor: 20,
            score: 32
        },
        {
            id: 6,
            nameTeam: 'BOX',
            numOfMatch: 14,
            numOfWins: 23,
            numOfLoses: 12,
            factor: 15,
            score: 32
        },
        {
            id: 7,
            nameTeam: 'VGM',
            numOfMatch: 14,
            numOfWins: 23,
            numOfLoses: 12,
            factor: 28,
            score: 37
        },
        {
            id: 8,
            nameTeam: 'CES',
            numOfMatch: 14,
            numOfWins: 23,
            numOfLoses: 12,
            factor: 10,
            score: 21
        }
    ]
    //sap xep 
    ;(() => {
        const size = pointsRank.length
        for(let i=0; i<size; i++){
            for(let j=i+1; j<size; j++){
                if(pointsRank[i].score < pointsRank[j].score){
                    let medial = pointsRank[i];
                    pointsRank[i] = pointsRank[j];
                    pointsRank[j] = medial
                }else if(pointsRank[i].score === pointsRank[j].score){
                    if(pointsRank[i].factor < pointsRank[j].factor){
                        let medial2 = pointsRank[i];
                        pointsRank[i] = pointsRank[j];
                        pointsRank[j] = medial2
                    }
                }
            }
        }
    })()
    return (
        <>
            <div className='rank__table'>
                <table>
                    <tbody>
                        <tr className='rank__name-col'>
                            <td></td>
                            <td>Đội</td>
                            <td>Trận</td>
                            <td>Thắng</td>
                            <td>Thua</td>
                            <td>HS</td>
                            <td>Điểm</td>
                        </tr>
                        {
                            pointsRank.map((item, index) => (
                                <tr className={`rank__team top-${index+1}`} key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.nameTeam}</td>
                                    <td>{item.numOfMatch}</td>
                                    <td>{item.numOfWins}</td>
                                    <td>{item.numOfLoses}</td>
                                    <td>{item.factor}</td>
                                    <td>{item.score}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default RankTable;
