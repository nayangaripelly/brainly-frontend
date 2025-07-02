import "./index.css";
import { Button } from "./Components/ui/Button";
import { ShareIcon } from "./icons/ShareIcon";
import { PlusIcon } from "./icons/PlusIcon";
import { Card } from "./Components/ui/Card";
import { AddContentModal } from "./Components/ui/AddContentModal";
import { useState } from "react";
import { Sidebar } from "./Components/ui/Sidebar";

function App() {
  const [openModal, setOpenModal] = useState(true);
  return (
    <div>
      <Sidebar />
      <div className="bg-gray-100 p-2 min-h-screen ml-72">
        {openModal && (
          <AddContentModal
            open={openModal}
            onClose={() => {
              setOpenModal(false);
            }}
          />
        )}
        <div className="flex flex-wrap justify-end gap-2">
          <Button
            variant="primary"
            size="md"
            onClick={() => {
              setOpenModal(true);
            }}
            text="Add Content"
            startIcon={<PlusIcon size="md" />}
          />
          <Button
            variant="secondary"
            size="md"
            onClick={() => {}}
            text="Share Brain"
            startIcon={<ShareIcon size="md" />}
          />
        </div>

        <div className="flex gap-4 m-4">
          <Card
            type="twitter"
            title="test"
            link="https://twitter.com/iTanayVaswani/status/1940348270414577984"
          />
          <Card
            type="youtube"
            title="test"
            link="https://www.youtube.com/watch?v=w0CMnOP-2ac"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
