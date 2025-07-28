import React from 'react';

interface ConfirmDialogProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700 shadow-2xl">
        <h3 className="text-xl font-bold text-white mb-4 text-center">Confirm Reset</h3>
        
        <p className="text-gray-300 mb-8 text-center leading-6">
          {message}
        </p>
        
        <div className="flex space-x-4">
          <button
            onClick={onCancel}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-xl transition-colors duration-200 font-medium"
          >
            Cancel
          </button>
          
          <button
            onClick={onConfirm}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-xl transition-colors duration-200 font-medium"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;