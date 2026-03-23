function App() {
  return (
    <>
      <div className="flex flex-col gap-2 mx-auto w-fit content-center p-16 border rounded-2xl">
        <h1 className="font-bold text-2xl">Create pasword</h1>
        <div>
          <input type="text" name="password" value={''} className="h-8 px-4 w-64 border rounded-lg" placeholder="Enter your passowrd"/>
          <img src="" alt="" />
        </div>
        <div>
          <h1>Password Requirements</h1>
          <form className="flex flex-col gap-2 p-4 border w-full rounded-lg">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="validations" id="length" />
              <label htmlFor="length" className="text-sm">At least 8 characters</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="validations" id="uCase" />
              <label htmlFor="uCase" className="text-sm">Contains uppercase character</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="validations" id="lCase" />
              <label htmlFor="lCase" className="text-sm">Contains lowercase character</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="validations" id="digits" />
              <label htmlFor="digits" className="text-sm">Contains a digit</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="validations" id="special" />
              <label htmlFor="special" className="text-sm">Contains a special character</label>
            </div>
          </form>
        </div>
        
      </div>
    </>
  );
}

export default App;
