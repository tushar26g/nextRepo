// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// interface MenuItem {
//   id: string;
//   label: string;
//   children?: MenuItem[];
// }

// const menuData: MenuItem[] = [
//   {
//     id: "a",
//     label: "Section A",
//     children: [
//       {
//         id: "a1",
//         label: "Subsection A1",
//         children: [
//           { id: "a11", label: "Item A11" },
//           { id: "a12", label: "Item A12" },
//           { id: "a13", label: "Item A13" },
//         ],
//       },
//       {
//         id: "a2",
//         label: "Subsection A2",
//         children: [
//           { id: "a21", label: "Item A21" },
//           { id: "a22", label: "Item A22" },
//         ],
//       },
//     ],
//   },
//   // Add more sections as needed
// ];

// function MenuItemComponent({
//   item,
//   depth = 0,
// }: {
//   item: MenuItem;
//   depth?: number;
// }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const hasChildren = item.children && item.children.length > 0;

//   return (
//     <div className="w-full">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={`
//           w-full flex items-center justify-between p-2 text-left
//           ${depth === 0 ? "text-lg font-medium" : "text-base"}
//           hover:bg-gray-100 dark:hover:bg-gray-700
//           ${isOpen ? "bg-gray-50 dark:bg-gray-700" : ""}
//         `}
//         style={{ paddingLeft: `${depth * 1}rem` }}
//       >
//         <span>{item.label}</span>
//         {hasChildren && (
//           <ChevronDown
//             className={`w-4 h-4 transition-transform ${
//               isOpen ? "transform rotate-180" : ""
//             }`}
//           />
//         )}
//       </button>
//       {isOpen && hasChildren && (
//         <div className="ml-2">
//           {item.children?.map((child) => (
//             <MenuItemComponent key={child.id} item={child} depth={depth + 1} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export function Sidebar() {
//   return (
//     <div className="w-64 bg-white dark:bg-gray-800 shadow-lg sticky left-0 top-16 bottom-0 overflow-y-auto">
//       <div className="p-4">
//         {menuData.map((item) => (
//           <MenuItemComponent key={item.id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// }
