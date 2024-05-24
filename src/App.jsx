
import CreateNoteForm from "./components/CreateNoteForm";

function App() {
  return (
    <section className="p-8 flex flex-row justify-start items-start gap-12">
      <div className="flex flex-col w-1/3 gap-10">
        <CreateNoteForm/>
        <ul className="flex-col gap-5 flex-1">
          <li>
            
          </li>
        </ul>
      </div>
    </section>
  );
}



export default App;
