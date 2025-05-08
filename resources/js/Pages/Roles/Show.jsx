import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
function View(props) {
    const { role, permissions, permissionsList } = props;
    const groupedPermissions = permissionsList.reduce((acc, permission) => {
        const [item, action] = permission.split('.'); // Split into item and action
        if (!acc[item]) acc[item] = []; // Create an array for each item type if it doesn't exist
        acc[item].push({ action, permission }); // Push the action and full permission into the item array
        return acc;
    }, {});
    // Initialize the state with the current permissions
    const [selectedPermissions, setSelectedPermissions] = useState(permissions);
    const handleCheckboxChange = (permission) => {
        setSelectedPermissions((prev) => {
            if (prev.includes(permission)) {
                return prev.filter((perm) => perm !== permission); // Uncheck
            } else {
                return [...prev, permission]; // Check
            }
        });
    };

    const handleSave = async () => {
        await router.put(route('roles.update', role.id), selectedPermissions);
    };
    return (
        <>
            <AuthenticatedLayout auth={props.auth}
                errors={props.errors}
                header={
                    <>
                        <div className='flex flex-col px-4 '>
                            <h2 className="font-semibold text-xl text-primary leading-tight">Role:
                                {role.name}</h2>
                        </div>
                    </>
                }
            >
                <Head title="Admin Dashboard" />
                <div className="flex flex-col">
                    <div className="col-span-4 bg-white p-4 text-primary rounded flex justify-between items-center">
                        <div className="">
                            <h2 className="text-[18px] text-[#000]">Manage Permissions for {role.name}</h2>
                            <label className="flex items-center mt-2 bg-white rounded-md py-2 pl-3">
                                <input
                                    type="checkbox"
                                    checked={permissionsList.length === selectedPermissions.length}
                                    onChange={(e) => {
                                        setSelectedPermissions(e.target.checked ? permissionsList : []);
                                    }}
                                    className='text-c1 focus:ring-c1'
                                />
                                <span className="ml-2 text-primary">Select All</span>
                            </label>
                        </div>

                        <button
                            onClick={handleSave}
                            className="inline-flex items-center ml-4 px-4 py-2 font-medium bg-c1 border border-transparent rounded text-[14px] text-white capitalize hover:border-c1 hover:bg-transparent hover:text-c1 transition-all duration-500"
                        >
                            Save
                        </button>


                    </div>
                    <div className="py-6 gap-4 grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">

                        {Object.entries(groupedPermissions).map(([item, actions]) => (
                            <div key={item} className="bg-white dark:bg-primary text-primary p-6 rounded">
                                <h4 className="font-semibold capitalize flex items-center gap-2 mb-2">
                                    <input
                                        type="checkbox"
                                        checked={actions.every(({ permission }) =>
                                            selectedPermissions.includes(permission))}
                                        onChange={() => {
                                            const allPermissions = actions.map(({ permission }) =>
                                                permission);
                                            const allSelected = allPermissions.every((perm) =>
                                                selectedPermissions.includes(perm));
                                            setSelectedPermissions((prev) =>
                                                allSelected
                                                    ? prev.filter((perm) => !allPermissions.includes(perm))
                                                    : [...prev, ...allPermissions]
                                            );
                                        }}
                                        className='text-c1 focus:ring-c1'
                                    />
                                    {item}
                                </h4>
                                <hr />
                                {actions.map(({ action, permission }) => (
                                    <label className="flex items-center mt-2" key={permission}>
                                        <input
                                            type="checkbox"
                                            checked={selectedPermissions.includes(permission)}
                                            onChange={() => handleCheckboxChange(permission)}
                                            className='text-c1 focus:ring-c1'
                                        />
                                        <span className="ml-2">{action} {item}</span>
                                    </label>
                                ))}

                            </div>
                        ))}

                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
export default View;