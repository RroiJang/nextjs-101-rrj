import Image from "next/image";
import TextField from '@mui/material/TextField';



export default function Flex() {

  const GetRandomColor = (): string => {
    const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    // setRandom(randomColor);
    return randomColor
  };

  return (

    <div className="flex justify-center items-center w-full h-screen bg-gray-200">
      <div className="flex flex-col shadow-2xl justify-evenly rounded-2xl h-fit w-[450px] h-[620px] bg-white">

        <div className="flex h-[100%] justify-center items-center" >
          <div className="flex justify-center items-center flex-col gap-4">
            <h1 className="font-extrabolt text-3xl">WELLCOME R.ROI.JANG</h1>
            <Image className="hover:w-24 hover:h-24" src="next.svg" alt="" width={100} height={100} />
          </div>
        </div>


        <div className="h-[100%] border-2 border-green-700">
          <TextField className="w-[270px]" id="standard-basic" label="Email" variant="standard" />
          <TextField
            className="w-[270px]"
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard" />
        </div>


        <div className="h-[100%] border-2 border-green-700">
          fgfghfghfgh
        </div>

      </div>
    </div>

    // <div className="flex justify-center items-center w-full h-screen bg-gray-200">
    //   <div className="flex flex-col justify-evenly rounded-xl w-[450px] h-[620px] bg-white shadow-md">

    //     <div className="flex justify-center items-center h-[100%]">
    //       <div className="flex justify-center items-center flex-col gap-8">
    //         <h1 className="font-extrabold text-3xl">Welcome Best</h1>
    //         <Image className="hover:w-24 hover:h-24" alt="" src="next.svg" width={70} height={70} />
    //       </div>
    //     </div>

    //     <div className="h-[100%] flex flex-col">
    //       <TextField className="w-[270px]" id="standard-basic" label="Email" variant="standard" />
    //       <TextField
    //         className="w-[270px]"
    //         id="standard-password-input"
    //         label="Password"
    //         type="password"
    //         autoComplete="current-password"
    //         variant="standard"
    //       />
    //     </div>

    //     <div className="h-[100%] border-2 border-blue-500"></div>
    //   </div>
    // </div>
  )
}


//   <div className="flex flex-wrap">
//     <div className="sm:text-red-300 text-yellow-600" style={{ backgroundColor: GetRandomColor() }}>01</div>
//     <div className="sm: w-64" style={{ backgroundColor: GetRandomColor() }}>02</div>
//     <div className="sm: w-64" style={{ backgroundColor: GetRandomColor() }}>03</div>
//   </div>
// )