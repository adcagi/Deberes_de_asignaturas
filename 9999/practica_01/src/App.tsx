import LocationSelector from '@/components/LocationSelector';
import TaskSearch from '@/components/TaskSearch';

import Header from '@/components/Header';
import NewsList from '@/components/NewsList';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

function App() {
  return (
    <div style={{ padding: '20px' }}>

      <section style={{ marginBottom: '40px' }}>
        <h1>Selector de Provincias y Ciudades</h1>
        <LocationSelector />
      </section>

      <hr />

      <section style={{ margin: '40px 0' }}>
        <h1>Buscador de Tareas</h1>
        <TaskSearch />
      </section>

      <hr />

      <section>
        <Header />

        <main style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <NewsList />
          <Sidebar />
        </main>

        <Footer />
      </section>

    </div>
  );
}

export default App;