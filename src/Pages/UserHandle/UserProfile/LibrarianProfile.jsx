import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "sonner";

const LibrarianProfile = () => {
  // Retrieve the librarian data from session storage
  const librarian = JSON.parse(sessionStorage.getItem("librarian"));

  // Destructure the librarian data to exclude the password
  const { FullName, ContactInformation, JobRole } = librarian;
  const [confirmation, setConfirmation] = useState("");

  const handleDeleteBook = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const ISBN = formData.get("isbn");

    try {
      const response = await fetch(
        `https://knowledge-junction-backend-4q201zreq-misbahkhan0009s-projects.vercel.app/delete-book/${ISBN}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ confirmation }), // Sending confirmation in the request body
        }
      );

      if (response.ok) {
        toast.success("Book deleted successfully");
        document.getElementById("DeleteBook").close();
      } else {
        const errorMessage = await response.text();
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      toast.error("Error deleting book");
    }
  };

  const handleUpdateBook = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const ISBN = formData.get("isbn");
    const bookData = {
      Title: formData.get("title"),
      PublicationDate: formData.get("publicationDate"),
      Author: formData.get("author"),
      Publisher: formData.get("publisher"),
      Category: formData.get("category"),
    };

    try {
      const response = await fetch(
        `https://knowledge-junction-backend-4q201zreq-misbahkhan0009s-projects.vercel.app/update-books/${ISBN}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookData),
        }
      );

      if (response.ok) {
        toast.success("Book updated successfully");
        document.getElementById("UpdateBook").close();
      } else {
        toast.error("Failed to update book");
      }
    } catch (error) {
      console.error("Error updating book:", error);
      toast.error("Error updating book");
    }
  };

  const handleAddBook = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const bookData = {
      ISBN: formData.get("isbn"),
      Title: formData.get("title"),
      PublicationDate: formData.get("publicationDate"),
      Author: formData.get("author"),
      Publisher: formData.get("publisher"),
      Category: formData.get("category"),
    };

    try {
      const response = await fetch(
        "https://knowledge-junction-backend-4q201zreq-misbahkhan0009s-projects.vercel.app/add-book",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookData),
        }
      );

      if (response.ok) {
        toast.success("Book added successfully");
        document.getElementById("AddBook").close();
      } else {
        const errorMessage = await response.text();
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error("Error adding book:", error);
      toast.error("Error adding book");
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <Helmet>
        <title>Librarian | Knowledge Junction</title>
      </Helmet>
      <h1 className="text-5xl font-thin mx-auto mt-20 mb-10">
        Librarian Profile
      </h1>
      <div className="mx-auto my-10 flex max-w-[350px] flex-col items-center justify-center space-y-4 rounded-xl bg-primary p-10  text-primary text-lg shadow-lg ">
        <div className="group relative">
          <img
            width={110}
            height={110}
            className="h-[110px] w-[110px] rounded-full object-cover"
            src={`https://ui-avatars.com/api/?name=${FullName}&size=128&background=F5F5DC&color=003724`}
            alt="Librarian Profile Picture"
          />
        </div>
        <div className="mb-6 text-center">
          <h1 className="text-5xl font-thin  text-secondary  ">{FullName}</h1>
          <p className="text-xl mt-3 text-secondary ">{JobRole}</p>
        </div>
        <div>
          <h1 className="text-xl font-thin  text-start  text-secondary   ">
            <span className="font-bold">Contact Info: </span>
            {ContactInformation}
          </h1>
        </div>
      </div>
      <h1 className="text-5xl font-thin text-center mt-12">
        Librarian Operations
      </h1>
      <div className="my-10">
        {/* update modal start */}
        <button
          className="btn btn-primary mx-4 text-secondary text-lg font-light"
          onClick={() => document.getElementById("UpdateBook").showModal()}
        >
          Update a Book
        </button>

        <dialog id="UpdateBook" className="modal">
          <div className="modal-box bg-primary text-secondary text-lg">
            <h3 className="font-thin text-center text-3xl my-3">
              Enter Book Info
            </h3>
            <form onSubmit={handleUpdateBook} className="space-y-4">
              <div>
                <label htmlFor="isbn" className="block font-thin">
                  ISBN *
                </label>
                <input
                  type="text"
                  id="isbn"
                  name="isbn"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-secondary text-primary text-lg border border-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="title" className="block font-thin">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="mt-1 block w-full px-3 py-2 bg-secondary text-primary text-lg border border-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="publicationDate" className="block font-thin">
                  Publication Date
                </label>
                <input
                  type="date"
                  id="publicationDate"
                  name="publicationDate"
                  className="mt-1 block w-full px-3 py-2 bg-secondary text-primary text-lg border border-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="author" className="block font-thin">
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  className="mt-1 block w-full px-3 py-2 bg-secondary text-primary text-lg border border-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="publisher" className="block font-thin">
                  Publisher
                </label>
                <input
                  type="text"
                  id="publisher"
                  name="publisher"
                  className="mt-1 block w-full px-3 py-2 bg-secondary text-primary text-lg border border-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="category" className="block font-thin">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  className="mt-1 block w-full px-3 py-2 bg-secondary text-primary text-lg border border-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div className="modal-action">
                <button
                  type="submit"
                  className="btn mx-auto font-semibold text-lg mt-6 mb-3 hover:btn-secondary"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </dialog>

        {/* update modal end */}
        {/* create book modal start */}
        <button
          className="btn btn-primary mx-4 text-secondary text-lg font-light"
          onClick={() => document.getElementById("AddBook").showModal()}
        >
          Add a Book
        </button>
        <dialog id="AddBook" className="modal">
          <div className="modal-box bg-primary text-secondary text-lg">
            <h3 className="font-thin text-center text-3xl my-3">
              Enter Book Info
            </h3>
            <form onSubmit={handleAddBook} className="space-y-4">
              <div>
                <label htmlFor="isbn" className="block font-thin">
                  ISBN *
                </label>
                <input
                  type="text"
                  id="isbn"
                  name="isbn"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-secondary text-primary text-lg border border-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="title" className="block font-thin">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="mt-1 block w-full px-3 py-2 bg-secondary text-primary text-lg border border-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="publicationDate" className="block font-thin">
                  Publication Date *
                </label>
                <input
                  type="date"
                  id="publicationDate"
                  name="publicationDate"
                  className="mt-1 block w-full px-3 py-2 bg-secondary text-primary text-lg border border-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="author" className="block font-thin">
                  Author *
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  className="mt-1 block w-full px-3 py-2 bg-secondary text-primary text-lg border border-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="publisher" className="block font-thin">
                  Publisher *
                </label>
                <input
                  type="text"
                  id="publisher"
                  name="publisher"
                  className="mt-1 block w-full px-3 py-2 bg-secondary text-primary text-lg border border-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="block font-thin">
                  Category *
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  className="mt-1 block w-full px-3 py-2 bg-secondary text-primary text-lg border border-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  required
                />
              </div>
              <div className="modal-action">
                <button
                  type="submit"
                  className="btn mx-auto font-semibold text-lg mt-6 mb-3 hover:btn-secondary"
                >
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </dialog>
        {/* create book modal start */}
        <button
          className="btn btn-primary text-secondary text-lg font-light"
          onClick={() => document.getElementById("DeleteBook").showModal()}
        >
          Delete a Book
        </button>

        <dialog id="DeleteBook" className="modal">
          <div className="modal-box bg-primary text-secondary text-lg">
            <h3 className="font-thin text-center text-3xl my-3">
              Enter Book ISBN and Confirmation
            </h3>
            <form className="space-y-4" onSubmit={handleDeleteBook}>
              <div>
                <label htmlFor="isbn" className="block font-thin">
                  ISBN *
                </label>
                <input
                  type="text"
                  id="isbn"
                  name="isbn"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-secondary text-primary text-lg border border-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="confirmation" className="block font-thin">
                  Confirmation [YES/NO] *
                </label>
                <input
                  type="text"
                  id="confirmation"
                  name="confirmation"
                  required
                  value={confirmation}
                  onChange={(e) => setConfirmation(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-secondary text-primary text-lg border border-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div className="modal-action">
                <button
                  type="submit"
                  className="btn mx-auto font-semibold text-lg mt-6 mb-3 hover:btn-secondary"
                >
                  Delete Book
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </section>
  );
};

export default LibrarianProfile;
