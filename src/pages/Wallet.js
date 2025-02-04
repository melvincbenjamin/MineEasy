const Wallet = () => {
    return (
      <Container fluid>
        <Row>
          <Col md={2} className="d-none d-md-block">
            <Sidebar />
          </Col>
          <Col md={10} sm={12} className="p-4">
            <Navbar bg="light" className="mb-4 shadow-sm">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                  <FaBars />
                </Navbar.Toggle>
                <Navbar.Collapse className="justify-content-end">
                  <FaUserCircle size={30} />
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <h2 className="mb-4">Dashboard</h2>
            <div className="p-4 border rounded shadow-sm bg-white">
              <p className="mb-2">USDT Wallet</p>
              <p className="fw-bold">Balance: 0.00000000 USDT</p>
              <Button variant="warning" className="w-100">Update Wallet</Button>
            </div>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  };

  export default Wallet;