import React from 'react'

const Card = (props) => {
  return (
    <div className="flex flex-col rounded-xl  p-4"
    style={{
      border: '0.88px solid',

      backdropFilter: 'saturate(180%) blur(14px)',
      background: ' #ffffff0d',
    }}
  >
    <div>
      <img
        src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
        alt="nft-gif"
        width="300"
        height="100"
        className="rounded-xl"
      />
    </div>
    <div className="flex flex-col  rounded-b-xl py-4 ">
      <div className="flex justify-between">
        <h1 className="font-RubikBold text-blue-500">{props.username}</h1>
        <h1 className=" font-RubikBold text-green-400">{props.Qualification}</h1>
      </div>
    </div>
  </div>
  )
}

export default Card
