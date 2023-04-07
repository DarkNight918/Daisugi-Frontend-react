import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import Layout from "../../components/Layout";
import { CoinMainTable, CoinChangeTable, CoinTokenInsightTable, NFTMainTable } from "../../components/Tables";
import CoinMarketImg from "../../assets/img/CoinMarket.gif";
import { API_URL } from "../../config/constants";

const socket = socketIOClient(API_URL);

const showTable = (type, data, loading) => {
  if (type === 0) {
    return <CoinMainTable CoinData={data} loading={loading} />
  }
  else if (type === 1) {
    return <CoinTokenInsightTable CoinData={data} loading={loading} />
  }
  else if (type === 2) {
    return <CoinChangeTable CoinData={data} loading={loading} />
  }
  else if (type === 3) {
    return <NFTMainTable />
  }
}

const Home = () => {
  const [coinData, setCoinData] = useState([]);
  const [tableNumber, setTableNumber] = useState(0);
  const [pageNum, setPageNum] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [startNum, setStartNum] = useState(0);
  
  useEffect(() => {
    // setIsLoading(true);
    // socket.on('TotalCoinInfo', async (data) => {
    //   if (data.coinData) {
    //     setCoinData(data.coinData);
    //     setIsLoading(false);
    //   }
    //   setStartNum(data.startNum)
    // })
    // console.log("err")
    // // Remove the listener on unmount to prevent memory leaks
    // return () => {
    //   socket.off('TotalCoinInfo')
    // };
  }, [])
  
  useEffect(() => {
    // if (startNum !== pageNum) {
    //   setIsLoading(true)
    // }
    // socket.emit('NextCoinInfo', pageNum);
  }, [coinData]);

  const getNextCoins = () => {
    setIsLoading(true)
    let temp = pageNum;
    temp += 50;
    setPageNum(temp);
  }

  const getPrevCoins = () => {
    setIsLoading(true)
    let temp = pageNum;
    temp -= 50;
    if (temp < 0) temp = 0;
    setPageNum(temp);
  }

  return (
    <Layout>
      <div className="w-full">
        <div className="flex items-center">
          <input
            className="bg-black p-4 rounded-md w-[500px] text-white outline-0 border-0 mx-auto flex"
            placeholder="Search by name, type & more"
          />
          <div className="text-white text-[14px] font">
            <button className="border-2 border-white px-6 py-2 rounded-[10px] min-w-[100px] transition ease-in-out hover:bg-white hover:text-black duration-300">
              Sign Up
            </button>
            <button className="border-2 border-white px-6 py-2 rounded-[10px] min-w-[100px] transition ease-in-out hover:bg-white hover:text-black duration-300 ml-4">
              Login
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-10 gap-10">
          <div className="bg-black w-[50%] flex px-8 py-16 rounded-lg">
            <div>
              <img
                src={CoinMarketImg}
                className="w-[200px]"
                alt="Coin Explore"
              />
            </div>
            <div className="m-auto">
              <div className="text-[32px] text-white font-bold">
                Coin Market List
              </div>
              <div className="text-[18px] text-white">
                Get all informaion about Coins
              </div>
              <button className="border-2 border-white px-6 py-2 rounded-[10px] min-w-[100px] transition ease-in-out hover:bg-white hover:text-black duration-300 text-white mt-8">
                Explore All
              </button>
            </div>
          </div>
          <div className="bg-black w-[50%] flex px-8 py-16 bg-[url('assets/img/trendingCoin.gif')] bg-cover bg-no-repeat relative rounded-lg">
            <div>{/* <img src={TrendingCoinImg} className='absolute'/> */}</div>
            <div>
              <div className="text-[32px] text-white font-bold">
                Trending Coins Today
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <p className="text-center text-[40px] font-bold text-white">
            Crypto Prices Today
          </p>
          <div className="flex gap-3 mt-8">
            <button className={`text-white py-2 px-5 bg-gray-700 rounded-lg tracking-[1px] transition ease-in-out hover:opacity-[0.5] ${tableNumber === 0 && "!bg-blue-700 !opacity-[1]"}`} onClick={() => setTableNumber(0)}>
              CryptoInfo
            </button>
            <button className={`text-white py-2 px-5 bg-gray-700 rounded-lg tracking-[1px] transition ease-in-out hover:opacity-[0.5] ${tableNumber === 1 && "!bg-blue-700 !opacity-[1]"}`} onClick={() => setTableNumber(1)}>
              CryptoATH
            </button>
            <button className={`text-white py-2 px-5 bg-gray-700 rounded-lg tracking-[1px] transition ease-in-out hover:opacity-[0.5] ${tableNumber === 2 && "!bg-blue-700 !opacity-[1]"}`} onClick={() => setTableNumber(2)}>
              CryptoHourly
            </button>
            <button className={`text-white py-2 px-5 bg-gray-700 rounded-lg tracking-[1px] transition ease-in-out hover:opacity-[0.5] ${tableNumber === 3 && "!bg-blue-700 !opacity-[1]"}`} onClick={() => setTableNumber(3)}>
              NFT
            </button>
          </div>
          <div className="m-8">
            {
              // coinData && showTable(tableNumber, coinData, isLoading)
            }
          </div>
          <div className="flex gap-5 justify-center">
            <button className="bg-gray-800 py-2 px-5 text-white font-bold rounded-md hover:bg-gray-600 transition ease-in-out" onClick={() => {
              getPrevCoins();
            }}>
              Prev
            </button>
            <button className="bg-gray-800 py-2 px-5 text-white font-bold rounded-md hover:bg-gray-600 transition ease-in-out" onClick={() => {
              getNextCoins();
            }}>
              Next
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;