import { useState } from "react";
import Select from "react-select";

export default function Header() {
    const sortList = [
        { value: "name", label: "Name" },
        { value: "date", label: "Birth date" },
    ];
    const positionList = [
        { value: "all", label: "All" },
        { value: "driver", label: "Driver" },
        { value: "waiter", label: "Waiter" },
        { value: "cook", label: "Cook" },
    ];

    const [showArchived, setShowArchived] = useState(false);

    const handleCheckboxChange = () => {
        setShowArchived((prevShowArchived) => !prevShowArchived);
    };

    // const [selectedOption, setSelectedOption] = useState("");

    // const handleSelectChange = (event) => {
    //     setSelectedOption(event.target.value);
    // };

    return (
        <section className="header">
            <div className="header-sort center">
                <p className="header-label">Sort by:</p>
                <div className="select-wrapper">
                    <Select options={sortList} defaultValue={sortList[0]} />
                </div>
            </div>
            <div className="header-position center">
                <p className="header-label">Position:</p>
                <div className="select-wrapper">
                    <Select
                        options={positionList}
                        defaultValue={positionList[0]}
                    />{" "}
                </div>
            </div>
            <div className="header-archive center">
                <label className="header-label-checkbox">
                    <input
                        className="header-label"
                        type="checkbox"
                        checked={showArchived}
                        onChange={handleCheckboxChange}
                    />
                    Archived
                </label>
            </div>
        </section>
    );
}
