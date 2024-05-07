const LeftComponent = () => {
  return (
    <div className="relative  ">
      <img
        src="src/assets/shocking1.png"
        alt="girl"
        className="rounded-[2.5rem]  h-[600px] w-[550px]  "
      />
      <div className="absolute lg:top-[6rem] lg:left-[-8rem] hidden lg:block transition-transform transform hover:scale-110">
        <L1 />
      </div>
      <div className="absolute transition-transform transform hover:scale-110 lg:bottom-[4rem] lg:left-[-5rem] hidden lg:block">
        <L2 />
      </div>
      <div className="absolute transition-transform transform hover:scale-110 lg:bottom-[-3rem] lg:right-[-3rem] lg:block hidden">
        <L3 />
      </div>
    </div>
  );
};

function L3() {
  return (
    <div className="rounded-[2rem] bg-green-950 px-[3.4rem] py-[2rem] flex flex-col w-[340px] ">
      <h1 className="text-2xl text-gray-400 font-semibold py-1">
        {" "}
        <span className="text-6xl font-semibold text-slate-100">$0.5</span>
        {"  "}
        MILLION
      </h1>
      <p className="text-lg text-slate-100 pt-5 ">
        {" "}
        Reduced client expenses by saving on hiring and employee costs.
      </p>
    </div>
  );
}

function L2() {
  return (
    <div className="  px-4 py-5 w-[260px] relative flex items-center gap-x-5 bg-white shadow-md rounded-full  border-2 ">
      <div className=" bg-slate-100 p-3 rounded-full  ">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.1587 19.9525C10.11 20.1462 8.89124 24.71 2.18749 24.71C1.92227 24.71 1.66792 24.6046 1.48038 24.4171C1.29284 24.2295 1.18749 23.9752 1.18749 23.71C1.18749 17.0062 5.75124 15.7875 5.94499 15.7387C6.20241 15.6744 6.47484 15.715 6.70235 15.8515C6.92985 15.9881 7.0938 16.2094 7.15811 16.4669C7.22243 16.7243 7.18185 16.9967 7.0453 17.2242C6.90875 17.4517 6.68741 17.6157 6.42999 17.68C6.31749 17.7112 3.62749 18.4975 3.23499 22.6625C7.39999 22.27 8.18749 19.585 8.21999 19.46C8.28629 19.2029 8.45201 18.9827 8.68069 18.8477C8.90936 18.7128 9.18227 18.6743 9.43936 18.7406C9.69646 18.8069 9.91668 18.9726 10.0516 19.2013C10.1865 19.43 10.225 19.7029 10.1587 19.96V19.9525ZM21.7837 11.5275L21.1875 12.1237V19.415C21.189 19.6786 21.138 19.9399 21.0376 20.1837C20.9372 20.4275 20.7893 20.6489 20.6025 20.835L16.3125 25.1225C16.1275 25.3088 15.9074 25.4566 15.665 25.5575C15.4226 25.6583 15.1626 25.7101 14.9 25.71C14.6833 25.7099 14.468 25.6749 14.2625 25.6062C13.9096 25.4895 13.5964 25.2764 13.3583 24.991C13.1202 24.7056 12.9666 24.3593 12.915 23.9912L12.2437 19.18L6.71749 13.6537L1.90874 12.9825C1.54017 12.9308 1.19333 12.7773 0.907245 12.5392C0.62116 12.3012 0.407177 11.988 0.289367 11.6349C0.171556 11.2819 0.154593 10.903 0.240385 10.5408C0.326176 10.1787 0.51132 9.84765 0.774987 9.58498L5.06249 5.29498C5.24858 5.10821 5.46996 4.96031 5.71374 4.85988C5.95752 4.75945 6.21883 4.70849 6.48249 4.70998H13.7737L14.37 4.11373C17.705 0.779978 21.7225 0.636228 23.2962 0.729978C23.7838 0.75961 24.2437 0.966667 24.5891 1.31208C24.9345 1.6575 25.1416 2.11739 25.1712 2.60498C25.2625 4.17373 25.1187 8.19248 21.785 11.5275H21.7837ZM11.7737 6.70998H6.48249L2.18749 11.0025L6.83124 11.65L11.7737 6.70998ZM19.1875 14.1237L14.2462 19.065L14.8962 23.71L19.1875 19.415V14.1237Z"
            fill="#2DA950"
          />
        </svg>
      </div>
      <div>
        <h1 className="text-xl font-medium"> 10 DAYS</h1>
        <p className="text-slate-500 text-md"> Staff Deployment</p>
      </div>
    </div>
  );
}

function L1() {
  return (
    <div className="w-[270px]  p-[1.5rem]  relative   bg-white shadow-md rounded-[2rem]  border-2 ">
      <h1 className="text-6xl font-semibold pt-1 ">40%</h1>
      <img
        src="src/assets/spark.png"
        alt="spark"
        className="absolute top-[-2rem] left-[-1rem]"
      />
      <h1 className="text-lg text-slate-500 pt-5 pb-2">
        Achieved reduction in project execution time by optimizing team
        availability
      </h1>
    </div>
  );
}

export default LeftComponent;
