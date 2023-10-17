import React, { useState, useEffect } from 'react';
import './DeviceTable.css'; // Import your CSS for styling
import { Modal, Button, ProgressBar } from 'react-bootstrap'; // Assuming you have a Modal component from a library like react-bootstrap
import DeviceRow from './DeviceRow';

function DeviceTable() {
  const [tableData, setTableData] = useState([]);
  const [filterString, setFilterString] = useState('');
  const [sortKey, setSortKey] = useState('scan_ip');
  const [sortOrder, setSortOrder] = useState('asc');
  const [jobRunning, setJobRunning] = useState(false);
  const [allSelected, setAllSelected] = useState(false);
  const [stackCount, setStackCount] = useState(0);
  const [deviceCount, setDeviceCount] = useState(0);
  const [selectedCount, setSelectedCount] = useState(0);
  const [discoverProgress, setDiscoverProgress] = useState(0);
  const [isDiscovering, setIsDiscovering] = useState(false);
  const [isCSVModalOpen, setIsCSVModalOpen] = useState(false);

  const tableHeaders = [
    { name: 'Hostname', selector: 'hostname' },
    { name: 'IP Address', selector: 'scan_ip' },
    { name: 'Model', selector: 'base_model' },
    { name: 'Firmware', selector: 'firmware' },
    { name: 'Status', selector: 'status' },
  ];

  const columnFilters = {
    hostname: '',
    scan_ip: '',
    base_model: '',
    firmware: '',
    status: '',
  };
/*
  useEffect(() => {
    // Fetch initial table data and handle subscriptions

    // Simulating data fetching and subscriptions
    const fetchData = async () => {
      // Replace this with actual data fetching and subscription setup
      const response = await fetch('/api/tableData');
      const data = await response.json();
      setTableData(data);

      // Simulate subscribing to job updates
      const discoverSubscription = subscribeToJobChanges((result) => {
        setJobRunning(result.running);
        setDiscoverProgress(result.progress);
      });

      // Simulate subscribing to device updates
      const deviceSubscription = subscribeToDeviceChanges((update) => {
        // Handle device updates and modify tableData as needed
      });

      // Cleanup subscriptions
      return () => {
        discoverSubscription.unsubscribe();
        deviceSubscription.unsubscribe();
      };
    };

    fetchData();
  }, []);
*/
  const toggleSelectAll = (checked) => {
    setAllSelected(checked);
    setSelectedCount(0);
    // Update the selected status of table rows
    // Loop through tableData and update the "selected" property of each entry
  };

  const updateColFilter = (event, columnName) => {
    const updatedFilters = { ...columnFilters, [columnName]: event.target.value };
    // Update the column filters based on the user's input
  };

  const tableEntryCallback = (data) => {
    // Handle callbacks from DeviceRow components and update counts accordingly
  };

  const tableSort = (key, force) => {
    if (force) {
      // Handle force sorting (if needed)
    } else {
      // Handle toggling sort order and sorting tableData based on the key and sortOrder
    }
  };

  const discover = () => {
    // Handle discovering new devices
    // Open the discover modal
  };

  const deleteDevices = () => {
    // Handle deleting selected devices
    // Open a confirmation modal
  };

  const saveCSVDialog = () => {
    // Handle exporting data to CSV
    // Open a modal for exporting data
    setIsCSVModalOpen(true);
  };

  return (
    <div>
      <div className="table-functions">
        {/* Add your table function buttons and input fields here */}
      </div>
      <table>
        <thead>
          {/* Add table headers with sorting and filtering options here */}
        </thead>
        <tbody>
          {tableData.map((entry, index) => (
            <DeviceRow
              key={index}
              entry={entry}
              tableHeaders={tableHeaders}
              filterString={filterString}
              columnFilters={columnFilters}
              onCallback={tableEntryCallback}
            />
          ))}
        </tbody>
      </table>

      {/* Additional modals or components */}
      <Modal show={isCSVModalOpen} onHide={() => setIsCSVModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>CSV Export</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add CSV export form or content here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsCSVModalOpen(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setIsCSVModalOpen(false)}>
            Export
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeviceTable;
