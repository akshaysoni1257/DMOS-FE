import React, { } from "react";


const Profile = () => {

    return (

        <main className="profile">
            <h2>Profile information</h2>
            <p>Personal details and application</p>

            <article className="profile-information">
                <hr />
                <section className="profile-information-section">
                    <h3>First Name</h3>
                    <p> First Name </p>
                </section>
                <hr />
                <section className="profile-information-section">
                    <h3> Last Name </h3>
                    <p> Last Name    </p>
                </section>
                <hr />
                <section className="profile-information-section">
                    <h3>Email</h3>
                    <p> Email </p>
                </section>
                <hr />
                <section className="profile-information-section">
                    <h3>Password</h3>
                    <p> Password </p>
                </section>
                <hr />
                <section className="profile-information-section">
                    <h3> Phone Number </h3>
                    <p> Phone Number </p>
                </section>
                <hr />
            </article>

            <section className="profile-buttons">
                <button type="button" className="active-button-style" to="/menu"> Back to Menu </button>
            </section>

        </main>

    )
}



export default Profile;