import React from 'react'

const DarkTheme = () => {
  return (
    <style jsx global>{`
    :root {
      --background-color: black;
      --text-color: white;
    }
  `}</style>
)
}

export default DarkTheme;