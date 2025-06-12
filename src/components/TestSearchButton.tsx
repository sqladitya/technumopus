import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Search } from "lucide-react";

export function TestSearchButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log("Test search button clicked!");
    setIsOpen(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Search className="w-4 h-4" />
        Test Search
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Test Search Dialog</h2>
            <p className="text-sm text-gray-600">
              This is a test dialog to verify the click functionality is
              working.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
