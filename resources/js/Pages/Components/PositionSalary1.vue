<template>
    <div class="bg-white shadow-md border border-gray-200 py-4 px-4 rounded-lg">
        <h3 class="pb-3">Salario / Posición</h3>
    <DoughnutChart :chartData="testData" />
    </div>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';
  import { DoughnutChart } from 'vue-chart-3';
  import { Chart, registerables } from "chart.js";

  Chart.register(...registerables);

  export default defineComponent({
    name: 'PositionSalary1',
    components: { DoughnutChart },
    setup() {
        const chartData = ref({});
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dkpoc6i0q6.execute-api.us-east-1.amazonaws.com/dev/position');
                const data = JSON.parse(response.data.data);
                const labels = data.map(item => item.position_type);
                const values = data.map(item => item.average_count);
                chartData.value = {
                    labels: labels,
                    datasets: [
                        {
                            data: values,
                            backgroundColor: ['#77CEFF', '#0079AF', '#123E6B']
                        },
                    ],
                }

            } catch (error) {
                console.log(error);
            }
        }

        onMounted(() => {
            fetchData();
        });

        const options = {
            plugins: {
                legend: {
                    display: true
                }
            }
        }

        return { chartData, options };
    },
});
  </script>
