


const Container = ({ children, sectionName }) => {
    return(
        <div className={sectionName}>
            <div className="container">
                <div className={`${sectionName}__inner`}>
                    {children}
                </div>
            </div>
        </div>
    )
}


export default Container