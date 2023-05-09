import Canvas from "./Canvas";

const draw = (context) => {
  context.fillStyle = "rgb(200, 0, 0)";
  context.fillRect(10, 10, 50, 50);

  context.fillStyle = "rgba(0, 0, 200, 0.5)";
  context.fillRect(30, 30, 50, 50);
};

const Arena = () => {
  return (
    <div className="w-3/6 h-full bg-[#1e1e1e] text-[#FFFFFF] flex flex-col items-center">
      <Canvas draw={draw} height={480} width={480} />
      <div>
        <div className="speed-operation my-10">
          <div className="speed form-group">
            <label htmlFor="speed" className="mr-3">
              SPEED
            </label>
            <input type="range" min="1" max="10" name="speed" />
          </div>
          <div className="operation form-group">
            <label htmlFor="operation" className="hidden">
              OPERATION
            </label>
            <select name="operation" id="operation" className=" bg-transparent">
              <option value="AND">OPERATION</option>
              <option value="AND">AND</option>
              <option value="XOR">XOR</option>
              <option value="OR">OR</option>
              <option value="NOT">NOT</option>
            </select>
          </div>
        </div>
        <button
          type="button"
          className="px-8 py-3 font-semibold text-[#FCE300]"
        >
          Battle!
        </button>
      </div>
    </div>
  );
};

export default Arena;
